"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReportsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertReportsArgs_1 = require("./args/UpsertReportsArgs");
const Reports_1 = require("../../../models/Reports");
const helpers_1 = require("../../../helpers");
let UpsertReportsResolver = class UpsertReportsResolver {
    async upsertReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reports_1.Reports, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReportsArgs_1.UpsertReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertReportsResolver.prototype, "upsertReports", null);
UpsertReportsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reports_1.Reports)
], UpsertReportsResolver);
exports.UpsertReportsResolver = UpsertReportsResolver;
