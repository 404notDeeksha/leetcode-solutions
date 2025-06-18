## Linked List

### Basics:
A **linked list** is a linear data structure where each element, called a *node*, contains two parts:
- **Data**: The value you want to store.
- **Pointer/Link**: A reference to the next node in the sequence.

The first node is called the **head**, and the last node points to `null`, indicating the end of the list. Linked lists do not require contiguous memory, making them dynamic and efficient for insertions and deletions compared to arrays.

### Types of Linked Lists
- **Singly Linked List**: Each node points to the next node.
- **Doubly Linked List**: Each node points to both the next and previous nodes.
- **Circular Linked List**: The last node points back to the head, forming a circle.

### Key Differences: Linked Lists vs Arrays

| Feature                | Arrays                   | Linked Lists             |
|------------------------|--------------------------|--------------------------|
| Memory allocation      | Contiguous, fixed size   | Non-contiguous, dynamic  |
| Direct access          | Yes (random access)      | No (sequential access)   |
| Insert/Delete          | Costly (need shifting)   | Efficient (update links) |
| Extra memory           | No (just data)           | Yes (data + pointer)     |

## Real-Life Applications of Linked Lists

Linked lists are widely used in scenarios where dynamic memory allocation and efficient insertions/deletions are needed:

- **Image viewers**: Browsing forward and backward through images.
- **Music playlists**: Navigating songs in order, supporting next/previous operations.
- **Browser cache**: Implementing LRU (Least Recently Used) caches, where the oldest visited site is removed when the cache is full.
- **Undo/Redo functionality**: In editors, where each action is a node in a linked list.
- **Memory management**: Keeping track of free memory blocks.
- **Implementation of stacks and queues**: Linked lists allow dynamic sizing for these structures.