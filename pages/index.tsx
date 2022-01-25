import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RefObject, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const itemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const itemsWrapperRef = useRef<HTMLDivElement | null>(null);
  const dataList = [
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
    {
      title: 'Central view',
      description: 'Great turbulent clouds emerged into consciousness citizens.',
    },
  ];
  useEffect(() => {
    if (itemsRef.current.length !== 0) {
      const observers: { observe: (element: Element) => void }[] = [];
      const createObserver = () => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: [0.1, 1]
        };
        itemsRef.current.forEach((item: any, index: number) => {
          observers[index] = new IntersectionObserver(handleIntersect, options);
          observers[index].observe(item);
        });
      }

      itemsWrapperRef.current?.addEventListener('scroll', event => {
        console.log('first');
      });

      const handleIntersect = (entries: any[]) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 1) {
            // 100퍼센트 보이면
            entry.target.classList.add('fully-visible');
          } else if (entry.intersectionRatio >= 0.1) {
            // 조금이라도 보이고 있으면
            entry.target.classList.add('visible');
            entry.target.classList.remove('fully-visible');
          } else {
            // 아예 안 보일 때
            entry.target.classList.remove('fully-visible', 'visible');
          }
        });
      }
      
      window.addEventListener("load", (event) => {
        createObserver();
      }, false);
    }
  }, [itemsRef]);
  
  useEffect(() => {
    itemsWrapperRef.current?.addEventListener('scroll', event => {
      const scrollArea: HTMLDivElement | null = itemsWrapperRef.current;
      const scrollLastElement: HTMLDivElement | null = itemsRef.current[itemsRef.current.length - 1];
      if (scrollArea?.scrollTop === scrollLastElement?.offsetTop) {
        alert('새로 로드');
      }
    });
  }, [itemsWrapperRef]);

  return (
    <>
      <div className="items" ref={itemsWrapperRef}>
        {
          dataList.map((items, index) => {
            return (
              <div key={`items_${index}`} ref={(el) => (itemsRef.current[index] = el)}className="item">
                <h2 className="item__caption-title">{items.title}</h2>
                <p className="item__caption-copy">{items.description}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
