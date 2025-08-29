// CompRatings.tsx
import { useState } from "react";
import {
  Card,
  Group,
  Rating,
  Text,
  Textarea,
  TextInput,
  Button,
  Stack,
  Badge,
} from "@mantine/core";
import { companyRatings } from "../Data/Company";

type Review = {
  id: string;
  user: string;
  rating: number;
  text: string;
  date: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const CompRatings = () => {
  const [reviews, setReviews] = useState<Review[]>(companyRatings.reviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const avgRating =
    reviews.length > 0
      ? +(
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(2)
      : 0;

  const canSubmit = rating > 0 && comment.trim().length >= 10;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitting(true);
    const newReview: Review = {
      id: crypto.randomUUID(),
      user: name.trim() || "Anonymous",
      rating,
      text: comment.trim(),
      date: new Date().toISOString(),
    };
    setReviews([newReview, ...reviews]);
    setName("");
    setRating(0);
    setComment("");
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col gap-5">
      {/*  Existing Ratings Summary */}
      <Card withBorder radius="lg" p="md">
        <Group align="center" justify="space-between">
          <Group>
            <Text fw={600} size="lg">
              Company Rating
            </Text>
            <Badge variant="light">{reviews.length} reviews</Badge>
          </Group>
          <Group gap="xs">
            <Rating value={avgRating} fractions={2} readOnly />
            <Text c="dimmed">{avgRating} / 5</Text>
          </Group>
        </Group>
      </Card>

      {/* Reviews list */}
      <Stack gap="md">
        {reviews.map((r) => (
          <Card
            key={r.id}
            withBorder
            radius="lg"
            p="md"
            style={{
              borderColor: "var(--mantine-color-azure-radiance-6)",
              borderWidth: "1px", 
              borderStyle: "solid",
            }}
          >
            <Group justify="space-between" align="flex-start">
              <Group>
                <Text fw={600}>{r.user}</Text>
                <Text size="sm" c="dimmed">
                  • {formatDate(r.date)}
                </Text>
              </Group>
              <Rating value={r.rating} fractions={2} readOnly />
            </Group>
            <Text mt="sm">{r.text}</Text>
          </Card>
        ))}
      </Stack>

      {/* Submit new review */}
      <Card withBorder radius="lg" p="md">
        <Text fw={600} mb="sm">
          Give a rating & write a review
        </Text>
        <Stack>
          <TextInput
            label="Your name (optional)"
            placeholder="e.g., Sumaiya Hossain"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <div>
            <Text size="sm" mb={6}>
              Your rating
            </Text>
            <Rating value={rating} onChange={setRating} fractions={2} />
          </div>
          <Textarea
            label="Your review"
            placeholder="Interview/Job experience, culture, benefits, etc. Write at least 10 characters."
            minRows={3}
            autosize
            value={comment}
            onChange={(e) => setComment(e.currentTarget.value)}
          />
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              {comment.trim().length} / 500
            </Text>
            <Button onClick={handleSubmit} disabled={!canSubmit || submitting}>
              {submitting ? "Submitting..." : "Submit review"}
            </Button>
          </Group>
        </Stack>
      </Card>
    </div>
  );
};

export default CompRatings;
