import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Title } from 'react-admin';

/**
 * DefaultScheduleBuilder Component
 * 
 * Schedule builder for creating and managing event sessions.
 * Accessed via custom route: /events/:id/schedule
 * 
 * Can be overridden via EventsPlugin overrides prop:
 * <EventsPlugin overrides={{ ScheduleBuilder: CustomScheduleBuilder }} />
 */
export const DefaultScheduleBuilder = () => {
  const { id } = useParams();
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Title title="Schedule Builder" />
      
      <Typography variant="h4" gutterBottom>
        Schedule Builder
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Event ID: {id}
      </Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Schedule Management
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            This is a complex feature that allows scheduling sessions for an event.
            The route is now managed by the plugin via CustomRoutes, demonstrating
            proper separation of concerns.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✅ Successfully extracted to plugin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✅ Route registered via CustomRoutes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✅ Inherits theme: {theme.palette.mode} mode
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
