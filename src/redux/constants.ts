import type { FilterValue } from '@/types';

export const statusFilters: Record<FilterValue, FilterValue> = {
  all: 'all',
  active: 'active',
  completed: 'completed',
} as const;
