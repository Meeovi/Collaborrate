"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByImportmResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByImportmArgs_1 = require("./args/GroupByImportmArgs");
const Importm_1 = require("../../../models/Importm");
const ImportmGroupBy_1 = require("../../outputs/ImportmGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByImportmResolver = class GroupByImportmResolver {
    async groupByImportm(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ImportmGroupBy_1.ImportmGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByImportmArgs_1.GroupByImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByImportmResolver.prototype, "groupByImportm", null);
GroupByImportmResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], GroupByImportmResolver);
exports.GroupByImportmResolver = GroupByImportmResolver;
