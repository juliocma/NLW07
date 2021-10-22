import prismaClient from '../prisma';

class GetLastMessagesService {
  async execute(limit: number) {
    const messages = await prismaClient.message.findMany({
      take: limit,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });
    return messages;
  }
}

export { GetLastMessagesService };
