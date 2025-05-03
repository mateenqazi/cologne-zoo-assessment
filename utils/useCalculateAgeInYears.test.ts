import { describe, expect, it } from 'vitest'

import { faker } from '@faker-js/faker'
import useCalculateAgeInYears from './useCalculateAgeInYears'

describe('the useCalculateAgeInYears composable', () => {
  it('handles over 100 years correctly', () => {
    const date = faker.date.between({ from: '1800-01-01T00:00:00.000Z', to: '1900-01-01T00:00:00.000Z' })
    expect(useCalculateAgeInYears(date)).toBeGreaterThanOrEqual(100)
  })

  // For the zookeepers its easier to conservatively assume that an animal is older rather than younger
  it('always rounds up', () => {
    const today = new Date()
    expect(useCalculateAgeInYears(today)).toBe(1)
  })
})
