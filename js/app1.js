function Q2(arr){
    var n = [arr[0]]; //�������
//�ӵڶ��ʼ���� 
    for(var i = 1; i < arr.length; i++) {
//�����ǰ����ĵ�i���ڵ�ǰ�����е�һ�γ��ֵ�λ�ò���i�� 
//��ô��ʾ��i�����ظ��ģ����Ե���������������� 
        if (arr.indexOf(arr[i]) == i) n.push(arr[i]);
    }
    return n;
}
