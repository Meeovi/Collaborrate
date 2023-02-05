"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCitiesArgs_1 = require("./args/AggregateCitiesArgs");
const CreateManyCitiesArgs_1 = require("./args/CreateManyCitiesArgs");
const CreateOneCitiesArgs_1 = require("./args/CreateOneCitiesArgs");
const DeleteManyCitiesArgs_1 = require("./args/DeleteManyCitiesArgs");
const DeleteOneCitiesArgs_1 = require("./args/DeleteOneCitiesArgs");
const FindFirstCitiesArgs_1 = require("./args/FindFirstCitiesArgs");
const FindFirstCitiesOrThrowArgs_1 = require("./args/FindFirstCitiesOrThrowArgs");
const FindManyCitiesArgs_1 = require("./args/FindManyCitiesArgs");
const FindUniqueCitiesArgs_1 = require("./args/FindUniqueCitiesArgs");
const FindUniqueCitiesOrThrowArgs_1 = require("./args/FindUniqueCitiesOrThrowArgs");
const GroupByCitiesArgs_1 = require("./args/GroupByCitiesArgs");
const UpdateManyCitiesArgs_1 = require("./args/UpdateManyCitiesArgs");
const UpdateOneCitiesArgs_1 = require("./args/UpdateOneCitiesArgs");
const UpsertOneCitiesArgs_1 = require("./args/UpsertOneCitiesArgs");
const helpers_1 = require("../../../helpers");
const Cities_1 = require("../../../models/Cities");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCities_1 = require("../../outputs/AggregateCities");
const CitiesGroupBy_1 = require("../../outputs/CitiesGroupBy");
let CitiesCrudResolver = class CitiesCrudResolver {
    async aggregateCities(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCitiesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCitiesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCities(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCities_1.AggregateCities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCitiesArgs_1.AggregateCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "aggregateCities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCitiesArgs_1.CreateManyCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "createManyCities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCitiesArgs_1.CreateOneCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "createOneCities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCitiesArgs_1.DeleteManyCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "deleteManyCities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCitiesArgs_1.DeleteOneCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "deleteOneCities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCitiesArgs_1.FindFirstCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findFirstCities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCitiesOrThrowArgs_1.FindFirstCitiesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findFirstCitiesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cities_1.Cities], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCitiesArgs_1.FindManyCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findManyCities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCitiesArgs_1.FindUniqueCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findUniqueCities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCitiesOrThrowArgs_1.FindUniqueCitiesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "findUniqueCitiesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CitiesGroupBy_1.CitiesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCitiesArgs_1.GroupByCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "groupByCities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCitiesArgs_1.UpdateManyCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "updateManyCities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCitiesArgs_1.UpdateOneCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "updateOneCities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCitiesArgs_1.UpsertOneCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesCrudResolver.prototype, "upsertOneCities", null);
CitiesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], CitiesCrudResolver);
exports.CitiesCrudResolver = CitiesCrudResolver;
