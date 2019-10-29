import duolingo
import sys

lingo  = duolingo.Duolingo(sys.argv[0])
print lingo.get_known_words('de')
