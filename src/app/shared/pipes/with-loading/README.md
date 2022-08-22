# withLoading Pipe

### What is withLoading Pipe?

The withLoading pipe handles the following three cases when communicating with the server:

- Pending (also known as loading...)
- Success
- Error

### Why should we use pipe withLoading?

When we send a request to the server, for a better user experience, we need to show a spinner to the user to wait for
the response. This is the **_pending_** or **_loading_** state mentioned above.

If the server operation runs without problems, the response received by the client side will contain the main data that
is required to be displayed to the user. This is the **_success_** mode.

Finally, if the server operation fails, an error response will be received, that is, a response that contains an error
from the server, which indicates that the desired operation failed. This is the **_error_** mode.

Normally, handling these three situations requires a lot of coding. The withLoading pipe generates and executes these
codes. Using this pipeline, less code is needed to handle these situations.

### Usage

1- First of all, this pipe must be added to the declarations array of the desired module like other pipes in Angular.

> Note: Add this pipe to the module only once. If someone added the pipe to the module before you, skip this step!

2- After adding the pipe to the module, you can use it. In the following example, the list of todos is received from the
server and the three different modes mentioned above are managed:

```html

<ng-container *ngIf="$any(todos$ | withLoading | async) as todoList">
  <ng-template [ngIf]="todoList.value">
    <app-todo-list [data]="todoList.value"></app-todo-list>
  </ng-template>
  <ng-template [ngIf]="todoList.error">
    <h1>Error {{ todoList.error.message }}</h1>
  </ng-template>
  <ng-template [ngIf]="todoList.loading">
    <h1>Loading...</h1>
  </ng-template>
</ng-container>
```
