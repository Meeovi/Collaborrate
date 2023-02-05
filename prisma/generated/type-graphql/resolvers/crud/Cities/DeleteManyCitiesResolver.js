"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCitiesArgs_1 = require("./args/DeleteManyCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCitiesResolver = class DeleteManyCitiesResolver {
    async deleteManyCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCitiesArgs_1.DeleteManyCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCitiesResolver.prototype, "deleteManyCities", null);
DeleteManyCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], DeleteManyCitiesResolver);
exports.DeleteManyCitiesResolver = DeleteManyCitiesResolver;
