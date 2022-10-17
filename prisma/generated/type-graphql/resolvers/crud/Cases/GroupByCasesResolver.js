"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCasesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCasesArgs_1 = require("./args/GroupByCasesArgs");
const Cases_1 = require("../../../models/Cases");
const CasesGroupBy_1 = require("../../outputs/CasesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCasesResolver = class GroupByCasesResolver {
    async groupByCases(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CasesGroupBy_1.CasesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCasesArgs_1.GroupByCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCasesResolver.prototype, "groupByCases", null);
GroupByCasesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cases_1.Cases)
], GroupByCasesResolver);
exports.GroupByCasesResolver = GroupByCasesResolver;
