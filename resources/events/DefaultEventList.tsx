import {
  List,
  Datagrid,
  TextField,
  DateField,
  ChipField,
  SearchInput,
  FilterList,
  FilterListItem,
} from 'react-admin';
import { Card, CardContent, useTheme } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import DraftsIcon from '@mui/icons-material/Drafts';
import PublishIcon from '@mui/icons-material/Publish';

/**
 * DefaultEventList component for the Events Plugin
 * Provides the default list view for events with filtering
 * Can be overridden by clients via the overrides.EventList prop
 */

const eventFilters = [<SearchInput key="search" source="q" alwaysOn />];

const EventFilterSidebar = () => {
  const theme = useTheme(); // Ensures component adopts base project theme
  
  return (
  <Card sx={{ 
    order: -1, 
    mr: 2, 
    mt: 8, 
    width: 200,
    backgroundColor: theme.palette.background.paper 
  }}>
    <CardContent>
      <FilterList label="Status" icon={<EventIcon />}>
        <FilterListItem label="Published" value={{ status: 'published' }} icon={<PublishIcon />} />
        <FilterListItem label="Draft" value={{ status: 'draft' }} icon={<DraftsIcon />} />
      </FilterList>
    </CardContent>
  </Card>
  );
};

export const DefaultEventList = () => {
  const theme = useTheme(); // Ensures component adopts base project theme
  
  return (
  <List 
    filters={eventFilters} 
    aside={<EventFilterSidebar />}
    sx={{ '& .RaList-main': { borderColor: theme.palette.divider } }}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="location" />
      <DateField source="startDate" />
      <DateField source="endDate" />
      <ChipField source="status" />
    </Datagrid>
  </List>
  );
};
