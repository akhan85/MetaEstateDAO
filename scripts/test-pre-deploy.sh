#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Initialize error flag
HAS_ERRORS=0

echo "Starting pre-deployment tests..."

echo "Running linting..."
npm run lint || {
    echo -e "${YELLOW}⚠ Linting had errors but continuing with tests${NC}"
    HAS_ERRORS=1
}

echo "Running unit tests..."
npm run test || {
    echo -e "${RED}✗ Unit tests failed${NC}"
    HAS_ERRORS=1
}

echo "Running API tests..."
npm run test:api || {
    echo -e "${RED}✗ API tests failed${NC}"
    HAS_ERRORS=1
}

echo "Running build..."
npm run build || {
    echo -e "${RED}✗ Build failed${NC}"
    HAS_ERRORS=1
}

if [ $HAS_ERRORS -eq 0 ]; then
    echo -e "${GREEN}All checks passed! Ready for deployment.${NC}"
else
    echo -e "${YELLOW}⚠ Some checks had warnings/errors. Please review the output above.${NC}"
fi

exit $HAS_ERRORS