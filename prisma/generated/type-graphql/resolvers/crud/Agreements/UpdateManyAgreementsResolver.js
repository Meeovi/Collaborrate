"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAgreementsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyAgreementsArgs_1 = require("./args/UpdateManyAgreementsArgs");
const Agreements_1 = require("../../../models/Agreements");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAgreementsResolver = class UpdateManyAgreementsResolver {
    async updateManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAgreementsArgs_1.UpdateManyAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAgreementsResolver.prototype, "updateManyAgreements", null);
UpdateManyAgreementsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], UpdateManyAgreementsResolver);
exports.UpdateManyAgreementsResolver = UpdateManyAgreementsResolver;
