"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAgreementsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneAgreementsArgs_1 = require("./args/UpsertOneAgreementsArgs");
const Agreements_1 = require("../../../models/Agreements");
const helpers_1 = require("../../../helpers");
let UpsertOneAgreementsResolver = class UpsertOneAgreementsResolver {
    async upsertOneAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAgreementsArgs_1.UpsertOneAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneAgreementsResolver.prototype, "upsertOneAgreements", null);
UpsertOneAgreementsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], UpsertOneAgreementsResolver);
exports.UpsertOneAgreementsResolver = UpsertOneAgreementsResolver;
