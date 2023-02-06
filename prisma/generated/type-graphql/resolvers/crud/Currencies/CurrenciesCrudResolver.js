"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCurrenciesArgs_1 = require("./args/AggregateCurrenciesArgs");
const CreateManyCurrenciesArgs_1 = require("./args/CreateManyCurrenciesArgs");
const CreateOneCurrenciesArgs_1 = require("./args/CreateOneCurrenciesArgs");
const DeleteManyCurrenciesArgs_1 = require("./args/DeleteManyCurrenciesArgs");
const DeleteOneCurrenciesArgs_1 = require("./args/DeleteOneCurrenciesArgs");
const FindFirstCurrenciesArgs_1 = require("./args/FindFirstCurrenciesArgs");
const FindFirstCurrenciesOrThrowArgs_1 = require("./args/FindFirstCurrenciesOrThrowArgs");
const FindManyCurrenciesArgs_1 = require("./args/FindManyCurrenciesArgs");
const FindUniqueCurrenciesArgs_1 = require("./args/FindUniqueCurrenciesArgs");
const FindUniqueCurrenciesOrThrowArgs_1 = require("./args/FindUniqueCurrenciesOrThrowArgs");
const GroupByCurrenciesArgs_1 = require("./args/GroupByCurrenciesArgs");
const UpdateManyCurrenciesArgs_1 = require("./args/UpdateManyCurrenciesArgs");
const UpdateOneCurrenciesArgs_1 = require("./args/UpdateOneCurrenciesArgs");
const UpsertOneCurrenciesArgs_1 = require("./args/UpsertOneCurrenciesArgs");
const helpers_1 = require("../../../helpers");
const Currencies_1 = require("../../../models/Currencies");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCurrencies_1 = require("../../outputs/AggregateCurrencies");
const CurrenciesGroupBy_1 = require("../../outputs/CurrenciesGroupBy");
let CurrenciesCrudResolver = class CurrenciesCrudResolver {
    async aggregateCurrencies(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCurrenciesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCurrenciesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCurrencies(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrencies_1.AggregateCurrencies, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCurrenciesArgs_1.AggregateCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "aggregateCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCurrenciesArgs_1.CreateManyCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "createManyCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currencies_1.Currencies, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCurrenciesArgs_1.CreateOneCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "createOneCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCurrenciesArgs_1.DeleteManyCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "deleteManyCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCurrenciesArgs_1.DeleteOneCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "deleteOneCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCurrenciesArgs_1.FindFirstCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "findFirstCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCurrenciesOrThrowArgs_1.FindFirstCurrenciesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "findFirstCurrenciesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currencies_1.Currencies], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCurrenciesArgs_1.FindManyCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "findManyCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCurrenciesArgs_1.FindUniqueCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "findUniqueCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCurrenciesOrThrowArgs_1.FindUniqueCurrenciesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "findUniqueCurrenciesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CurrenciesGroupBy_1.CurrenciesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCurrenciesArgs_1.GroupByCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "groupByCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCurrenciesArgs_1.UpdateManyCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "updateManyCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCurrenciesArgs_1.UpdateOneCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "updateOneCurrencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currencies_1.Currencies, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCurrenciesArgs_1.UpsertOneCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrenciesCrudResolver.prototype, "upsertOneCurrencies", null);
CurrenciesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], CurrenciesCrudResolver);
exports.CurrenciesCrudResolver = CurrenciesCrudResolver;
