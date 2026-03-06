import { useInput, InputProps } from 'react-admin';
import { Box, TextField, MenuItem, Typography, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { generateRRule } from '../utils/recurringEvents';

/**
 * RecurrenceInput component for the Events Plugin
 * Allows users to configure recurring event patterns
 */

interface RecurrenceInputProps extends Omit<InputProps, 'source'> {
  source: string;
}

export const RecurrenceInput = (props: RecurrenceInputProps) => {
  const { field } = useInput(props);
  const theme = useTheme(); // Ensures component adopts base project theme
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [interval, setInterval] = useState(1);
  const [count, setCount] = useState<number | undefined>(3);

  useEffect(() => {
    if (frequency && interval) {
      const rule = generateRRule(frequency, interval, count);
      field.onChange(rule);
    }
  }, [frequency, interval, count]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="subtitle2">Recurrence Pattern</Typography>

      <TextField
        select
        label="Frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as any)}
        fullWidth
      >
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
      </TextField>

      <TextField
        type="number"
        label="Interval"
        value={interval}
        onChange={(e) => setInterval(parseInt(e.target.value, 10))}
        helperText="Repeat every N days/weeks/months"
        fullWidth
        inputProps={{ min: 1 }}
      />

      <TextField
        type="number"
        label="Number of Occurrences"
        value={count || ''}
        onChange={(e) => setCount(e.target.value ? parseInt(e.target.value, 10) : undefined)}
        helperText="Leave empty for infinite"
        fullWidth
        inputProps={{ min: 1 }}
      />

      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
        Generated Rule: {field.value || 'None'}
      </Typography>
    </Box>
  );
};
