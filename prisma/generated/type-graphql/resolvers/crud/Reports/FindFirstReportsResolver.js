"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReportsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstReportsArgs_1 = require("./args/FindFirstReportsArgs");
const Reports_1 = require("../../../models/Reports");
const helpers_1 = require("../../../helpers");
let FindFirstReportsResolver = class FindFirstReportsResolver {
    async findFirstReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reports_1.Reports, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReportsArgs_1.FindFirstReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstReportsResolver.prototype, "findFirstReports", null);
FindFirstReportsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reports_1.Reports)
], FindFirstReportsResolver);
exports.FindFirstReportsResolver = FindFirstReportsResolver;
