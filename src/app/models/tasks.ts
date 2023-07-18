export interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'to start' | 'in progress' | 'completed';
    createdBy: string; 
    assignedTo: string; 
    createdAt: Date;
  }