"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAgreementsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAgreementsOrThrowArgs_1 = require("./args/FindUniqueAgreementsOrThrowArgs");
const Agreements_1 = require("../../../models/Agreements");
const helpers_1 = require("../../../helpers");
let FindUniqueAgreementsOrThrowResolver = class FindUniqueAgreementsOrThrowResolver {
    async findUniqueAgreementsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAgreementsOrThrowArgs_1.FindUniqueAgreementsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAgreementsOrThrowResolver.prototype, "findUniqueAgreementsOrThrow", null);
FindUniqueAgreementsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], FindUniqueAgreementsOrThrowResolver);
exports.FindUniqueAgreementsOrThrowResolver = FindUniqueAgreementsOrThrowResolver;
