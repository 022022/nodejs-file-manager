# Node.js Console File Manager


```
npm run start -- --username=your_username
help 
```

```help``` will give you the following list of commands


  | command	                         | example
  |----------------------------------|-----------------------------------------------------------------------
  | add - create file                | add trturh.txt
  | rn - rename file                 | rn "C:\\Users\\User\\test test\\ttt.txt" qqq1.js
  | cp - copy file                   | cp "C:\\Users\\User\\test test\\qqq1.js" "C:\\Users\\User\\test\\qqq2.js"
  | mv - copy and delete             | mv "C:\\Users\\User\\test test\\qqq1.js" "C:\\Users\\User\\test\\qqq2.js"
  | rm - delete                      | rm C:\\Users\\User\\test test\\qqq1.js
  | cat - read and print             | cat C:\\Users\\User\\test\\qqq2.js
  | compress - Brotli                | compress "C:\\Users\\User\\test\\qqq2.js" "C:\\Users\\User\\test\\qqq2"
  | decompress - Brotli              | decompress "C:\\Users\\User\\test\\qqq2" "C:\\Users\\User\\test\\qqq2.js"
  | hash - Calculate hash            | hash C:\\Users\\User\\test\\qqq2.js
  | cd - go from current directory   | cd MyFoldername
  | ls - list files                  | ls
  | up - go up from directory        | up
  
  | os commands:
  |------------------------------------------
  | os --EOL  - Get EOL (default system End-Of-Line)
  | os --cpus  - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
  | os --homedir  - Get home directory
  | os --username  - Get current system user name
  | os --architecture  - Get CPU architecture for which Node.js binary has compiled

