#!/usr/bin/env python3

import glob
import sys

def log_files_of_type(root_dir, ext):
   """
   Returns a list of all the files with a given extension in the named directory.
   @param root_dir : the directory to parse.
   @param ext : the extension to match.
   """
   for filename in glob.iglob(root_dir + '**/*.{0}'.format(ext), recursive=True):
      print(filename)

if __name__ == "__main__":
   # Select the method to run based off of the arguments.
   # args are [0] script name, [1] method name. Subsequent args are arbitrary based on method called.
   method_name = str(sys.argv[1])

   if method_name == "log_files_of_type":
      log_files_of_type(sys.argv[2], sys.argv[3])