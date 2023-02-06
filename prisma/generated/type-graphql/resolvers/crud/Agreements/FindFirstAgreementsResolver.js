"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAgreementsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAgreementsArgs_1 = require("./args/FindFirstAgreementsArgs");
const Agreements_1 = require("../../../models/Agreements");
const helpers_1 = require("../../../helpers");
let FindFirstAgreementsResolver = class FindFirstAgreementsResolver {
    async findFirstAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAgreementsArgs_1.FindFirstAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAgreementsResolver.prototype, "findFirstAgreements", null);
FindFirstAgreementsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], FindFirstAgreementsResolver);
exports.FindFirstAgreementsResolver = FindFirstAgreementsResolver;
