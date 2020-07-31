<script>
function sumit(int a ,int b){
  int sum=a+b;
  return sum;
}
function subtractit(int a ,int b){
	int c=a-b;
    return c;
}
function multiplyit(int a ,int b)
{
	int c=a*b;
	return c;
}
function divideit(int a ,int b){
	int c=a/b;
	return c;
}
function operate(int a ,int b){
	string "/" ,"+" ,"*","-";
	if("/"){
		divideit(a,b);
	}else if("+"){
		sumit(a,b);
	}else if("*"){
		multiplyit(a,b);
	}else("-"){
		subtractit(a,b);
	}

}
</script>