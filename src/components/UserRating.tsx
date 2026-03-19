'use client';

import { updateRating } from '@/src/lib/store/features/vault/vaultSlice';
import { useAppDispatch } from '@/src/lib/store/hooks';
import { Star } from 'lucide-react';
import React, { useState } from 'react';

interface UserRatingProps {
	gameId: number;
	currRating?: number;
}

function UserRating({ gameId, currRating = 0 }: UserRatingProps) {
	const [hover, setHover] = useState<number>(0);
	const dispatch = useAppDispatch();

	const handleRating = (e: React.MouseEvent, val: number) => {
		e.stopPropagation();
		e.preventDefault();
		dispatch(updateRating({ id: gameId, user_rating: val }));
	};

	return (
		<div className="flex gap-1 items-center z-30 relative py-2">
			{Array.from({ length: 5 }, (_, i) => {
				const starValue = i + 1;
				return (
					<Star
						key={i}
						size={20}
						className="cursor-pointer transition-colors"
						// Fill logic: prioritizes hover, then falls back to stored rating
						fill={(hover || currRating) >= starValue ? 'gold' : 'none'}
						color={(hover || currRating) >= starValue ? 'gold' : 'gray'}
						onMouseEnter={() => setHover(starValue)}
						onMouseLeave={() => setHover(0)}
						onClick={(e) => handleRating(e, starValue)}
					/>
				);
			})}
			<span className="text-sm ml-2">({currRating}/5)</span>
		</div>
	);
}

export default UserRating;
