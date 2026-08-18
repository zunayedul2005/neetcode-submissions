class DynamicArray:
    
    def __init__(self, capacity: int):
        if capacity<= 0:
            raise ValueError("capacity must be a positive value greater then 0")

        self.capacity = capacity
        self.length = 0
        self.arr = [0]* capacity

    def get(self, i: int) -> int:
        return self.arr[i]

    def set(self, i: int, n: int) -> None:
        self.arr[i] = n

    def pushback(self, n: int) -> None:
        if self.length == self.capacity :
            self.resize()
        self.arr[self.length] = n
        self.length += 1


    def popback(self) -> int:
      # return self.arr.pop(self.length-1)
      #self.length -= 1
      pop = self.arr[self.length-1]
      self.length -= 1
      return pop

        


    def resize(self) -> None:
        self.capacity *=  2
        # or we can do, new_arr = self.arr*2, directly make a new arr with twice the space, and ignore the capacity *= 2?
        new_arr = [0]*  self.capacity
        for i in range(self.length):
            new_arr[i] = self.arr[i]
        self.arr = new_arr



    def getSize(self) -> int:
        return self.length
    
    def getCapacity(self) -> int:
        return self.capacity
