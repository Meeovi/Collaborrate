"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAgreementsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteAgreementsArgs_1 = require("./args/DeleteAgreementsArgs");
const Agreements_1 = require("../../../models/Agreements");
const helpers_1 = require("../../../helpers");
let DeleteAgreementsResolver = class DeleteAgreementsResolver {
    async deleteAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAgreementsArgs_1.DeleteAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteAgreementsResolver.prototype, "deleteAgreements", null);
DeleteAgreementsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], DeleteAgreementsResolver);
exports.DeleteAgreementsResolver = DeleteAgreementsResolver;
