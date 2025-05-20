export function createMinHeap() {
    const heap = [];
  
    function getParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
  
    function getLeftChildIndex(i) {
      return 2 * i + 1;
    }
  
    function getRightChildIndex(i) {
      return 2 * i + 2;
    }
  
    function swap(i, j) {
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
  
    function bubbleUp() {
      let index = heap.length - 1;
      while (index > 0) {
        const parentIndex = getParentIndex(index);
        if (heap[index] >= heap[parentIndex]) break;
        swap(index, parentIndex);
        index = parentIndex;
      }
    }
  
    function sinkDown() {
      let index = 0;
      const length = heap.length;
  
      while (true) {
        let left = getLeftChildIndex(index);
        let right = getRightChildIndex(index);
        let smallest = index;
  
        if (left < length && heap[left] < heap[smallest]) {
          smallest = left;
        }
  
        if (right < length && heap[right] < heap[smallest]) {
          smallest = right;
        }
  
        if (smallest === index) break;
  
        swap(index, smallest);
        index = smallest;
      }
    }
  
    return {
      insert(value) {
        heap.push(value);
        bubbleUp();
      },
  
      extractMin() {
        if (heap.length === 0) return null;
        const min = heap[0];
        const end = heap.pop();
        if (heap.length > 0) {
          heap[0] = end;
          sinkDown();
        }
        return min;
      },
  
      peek() {
        return heap[0] ?? null;
      },
  
      size() {
        return heap.length;
      },
  
      print() {
        console.log("Heap",heap);
      }
    };
  }
  
    // Example usage:
    const minHeap = createMinHeap();
    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(8);
    minHeap.insert(1);
    minHeap.insert(4);
    minHeap.insert(2);
    minHeap.insert(7);
    minHeap.insert(6);
    minHeap.insert(0);

    minHeap.print(); // [0, 1, 2, 3, 4, 8, 7, 6, 5]

    console.log("minHeap.extractMin()",minHeap.extractMin()); // 0
    minHeap.print(); // [1, 3, 2, 5, 4, 8, 7, 6]

    console.log("minHeap.peek()", minHeap.peek()); // 1
    console.log("minHeap.size()", minHeap.size());  // 8

