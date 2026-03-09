import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactFormSubmission, AppointmentRequest, RegionalClinicInfo } from '../backend';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(data.name, data.email, data.phone, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
}

export function useBookAppointment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      service: string;
      preferredDate: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.bookAppointment(
        data.name,
        data.email,
        data.phone,
        data.service,
        data.preferredDate,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
}

export function useGetRegionalClinicInfo(continent: string) {
  const { actor, isFetching } = useActor();

  return useQuery<RegionalClinicInfo | null>({
    queryKey: ['regionalClinicInfo', continent],
    queryFn: async () => {
      if (!actor || !continent) return null;
      try {
        return await actor.getRegionalClinicInfo(continent);
      } catch (error) {
        return null;
      }
    },
    enabled: !!actor && !isFetching && !!continent,
  });
}

export function useGetAllRegionalClinicInfos() {
  const { actor, isFetching } = useActor();

  return useQuery<RegionalClinicInfo[]>({
    queryKey: ['allRegionalClinicInfos'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRegionalClinicInfos();
    },
    enabled: !!actor && !isFetching,
  });
}
