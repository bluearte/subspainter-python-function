function GetAllFilesInDirectory(root)
{
  if (root == undefined)
  return;

  var pypath = "python"
  // I put my scripts in a relative path to keep my plugin tidy.
  var script_path = "python/fileUtils.py";

  // Gathering files
  var ret = "NOSTRING";
  try
  {
      // The arguments are used as parameter inputs to the Python script. This requires some planning
      // and well communicated conventions, but works well enough.
      ret = alg.subprocess.check_output(
          [
          pypath, // Absolute path to interpreter.
          script_path, // Relative path to the py script.
          "log_files_of_type", // sys.argv[1], in this case the python method I'm calling.
          root, // sys.argv[2], used as a parameter for my method, in this case, the root directory to find files in.
          "spp" // sys.argv[3], used as a parameter for my method, in this case the file type extension to look for.
          ]
      );
  }
  catch(err)
  {
      alg.log.exception(err);
      return;
  }

  // Iterating the returned string
  var file_urls = [];
  var all_files = ret.split(/\r?\n/);
  for (x = 0; x < all_files.length; x++)
  {
      var local_file = all_files[x];
      if(local_file.length == 0)
          continue;

      // Convert the file names to the native substance path URL format.
      var project_url = alg.fileIO.localFileToUrl(local_file);
      file_urls.push(project_url);
  }
  return file_urls;
}
