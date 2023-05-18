import os
import re

files_to_read = ["get.ts", "post.ts", "delete.ts", "put.ts"]

current_directory = os.getcwd()  # Current directory


def generate_markdown(folder_name: str, function_names: str, new_dir: bool) -> str:
    """
    This function will generate the markdown for each function
    """
    markdown = f"### {folder_name.capitalize()}\n\n" if new_dir else ""
    for function_name in function_names:
        markdown += f"#### {function_name}\n\n"
        markdown += f"Request {function_name}.\n\n"
        markdown += f"Docs: [https://docs.wildduck.email/api/#operation/{function_name}](https://docs.wildduck.email/api/#operation/{function_name})\n\n"
    return markdown


def process_file(file_path: str, new_dir: bool) -> str:
    """
    Process the selected file and read the markdown inside it
    """
    result = ""

    with open(file_path, "r") as file:
        file_content = file.read()
        matches = re.findall(r"export const (\w+) = async", file_content)

        if matches:
            function_names = matches
            folder_name = os.path.basename(os.path.dirname(file_path))
            markdown = generate_markdown(folder_name, function_names, new_dir)
            result += markdown

    return result


def process_directory(directory_path: str) -> str:
    """
    Walk through directories, get all the request functions and
    generate the markdown documentation
    """
    docs = ""

    for root, _, files in os.walk(directory_path):
        new_dir = True

        for file in files:
            if file in files_to_read:
                file_path = os.path.join(root, file)
                docs += process_file(file_path, new_dir)
                new_dir = False

    return docs


def main():
    process_directory(current_directory)

    with open("docs.md", "w") as file:
        file.write(docs)


if __name__ == "__main__":
    main()
