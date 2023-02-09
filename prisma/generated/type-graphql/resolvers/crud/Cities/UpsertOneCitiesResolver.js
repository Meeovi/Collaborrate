"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCitiesArgs_1 = require("./args/UpsertOneCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const helpers_1 = require("../../../helpers");
let UpsertOneCitiesResolver = class UpsertOneCitiesResolver {
    async upsertOneCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneCitiesResolver.prototype, "upsertOneCities", null);
UpsertOneCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], UpsertOneCitiesResolver);
exports.UpsertOneCitiesResolver = UpsertOneCitiesResolver;
