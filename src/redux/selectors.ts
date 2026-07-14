import type { AppState } from '@/types';
import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state: AppState) => state.tasks.items;

export const selectStatusFilter = (state: AppState) => state.filters.state;

// Lesson 13
export const selectRemoteTasks = (state: AppState) => state.remoteTasks.items;

export const selectVisibleRemoteTasks = (state: AppState) => {
  const tasks = selectRemoteTasks(state);
  const statusFilter = selectStatusFilter(state);

  console.info('Filter visible tasks. Non-memoized selector');

  switch (statusFilter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const selectVisibleRemoteTasksMemoized = createSelector(
  [selectRemoteTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.info('Filter visible tasks. Memoized selector');
    switch (statusFilter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

interface TaskCounterInterface {
  active: number;
  completed: number;
}

export const selectRemoteTaskCounts = (state: AppState) => {
  const tasks = selectRemoteTasks(state);

  console.log('Calculating task count');

  const count: TaskCounterInterface = tasks.reduce(
    (acc: TaskCounterInterface, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return count;
};

export const selectRemoteTaskCointsMemoized = createSelector(
  [selectRemoteTasks],
  tasks => {
    console.log('Calculating task memoized count');
    // const count: TaskCounterInterface =
    return tasks.reduce(
      (acc, task) => {
        if (task.completed) {
          acc.completed += 1;
        } else {
          acc.active += 1;
        }
        return acc;
      },
      { active: 0, completed: 0 }
    );
    // return count;
  }
);
