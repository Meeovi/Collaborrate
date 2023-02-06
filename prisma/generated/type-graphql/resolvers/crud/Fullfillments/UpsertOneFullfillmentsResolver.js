"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFullfillmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneFullfillmentsArgs_1 = require("./args/UpsertOneFullfillmentsArgs");
const Fullfillments_1 = require("../../../models/Fullfillments");
const helpers_1 = require("../../../helpers");
let UpsertOneFullfillmentsResolver = class UpsertOneFullfillmentsResolver {
    async upsertOneFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFullfillmentsArgs_1.UpsertOneFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneFullfillmentsResolver.prototype, "upsertOneFullfillments", null);
UpsertOneFullfillmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], UpsertOneFullfillmentsResolver);
exports.UpsertOneFullfillmentsResolver = UpsertOneFullfillmentsResolver;
