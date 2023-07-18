export interface Tasks {
    _id:         string;
    title:       string;
    description: string;
    dueDate:     Date;
    priority:    string;
    status:      string;
    createdBy:   AssignedTo;
    assignedTo:  AssignedTo;
}

export interface AssignedTo {
    _id:      string;
    username: string;
}