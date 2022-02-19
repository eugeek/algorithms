def insertionSort(list):
    for i in range(0, len(list)):
        t = list[i]
        j = i - 1
        while j >= 0 and t < list[j]:
            list[j+1] = list[j]
            j -= 1
        list[j+1] = t
    return list
