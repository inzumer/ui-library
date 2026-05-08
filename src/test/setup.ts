import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'
import { expect } from 'vitest'

// jest-axe types reference Jest's MatchersObject which is incompatible with Vitest's extend signature
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
expect.extend(toHaveNoViolations as Parameters<typeof expect.extend>[0])
