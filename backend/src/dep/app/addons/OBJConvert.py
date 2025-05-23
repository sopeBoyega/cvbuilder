import pickle 
from cryptography.fernet import Fernet

class OBJConvert:
    def __init__(self,filename):
        self.filename = filename
    def save(self,obj):
        with open(self.filename,"wb") as f:
            pickle.dump(obj,f)
    def load(self):
        with open(self.filename,"rb") as f:
            return pickle.load(f)

class Encrypted:
    def __init__(self,filename,key):
        self.filename = filename
        self.key = key
    def save(self,obj):
        cipher = Fernet(self.key)
        with open(self.filename,"wb") as f:
            f.write(cipher.encrypt(pickle.dumps(obj)))
    def load(self):
        cipher = Fernet(self.key)
        with open(self.filename,"rb") as f:
            return pickle.loads(cipher.decrypt(f.read()))
