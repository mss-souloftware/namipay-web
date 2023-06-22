import clsx from 'clsx';

export default function Container({ className, ...props }) {
  return (
    <div className={clsx('container mx-auto px-8 relative', className)} {...props} />
  );
}
