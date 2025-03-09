def delete_element(my_list, element):
    """Removes the first occurrence of the element from the list."""
    try:
        my_list.remove(element)
        return my_list
    except ValueError:
        return f"Element {element} not found in the list."

# Example usage
my_list = [1, 2, 3, 4, 5]
element_to_delete = 3

result = delete_element(my_list, element_to_delete)
print(result)  # Output: [1, 2, 4, 5]