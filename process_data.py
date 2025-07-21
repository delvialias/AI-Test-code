def process_data(data):
    """Return a list of stripped, non-empty items from the input list."""
    return [item.strip() for item in data if item.strip()]

# Example usage:
data = [" apple ", "", "banana", "  ", "cherry "]
print(process_data(data)) 