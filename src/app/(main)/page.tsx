import Image from "next/image";
import styles from "@/styles/page.module.css";

export default function main() {
  return (
    <main className={styles.main}>
      <div>
        <p>1. 심플하고 예쁜 디자인으로 블로그 구조 만들기</p>
        <p>2. notion API 연결해서 블로그 글 연결하기</p>
        <p>3. 검색, 필터, 애니메이션 효과 등 기능 추가</p>
      </div>
    </main>
  );
}
