"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReportsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteReportsArgs_1 = require("./args/DeleteReportsArgs");
const Reports_1 = require("../../../models/Reports");
const helpers_1 = require("../../../helpers");
let DeleteReportsResolver = class DeleteReportsResolver {
    async deleteReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reports_1.Reports, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReportsArgs_1.DeleteReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteReportsResolver.prototype, "deleteReports", null);
DeleteReportsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reports_1.Reports)
], DeleteReportsResolver);
exports.DeleteReportsResolver = DeleteReportsResolver;
