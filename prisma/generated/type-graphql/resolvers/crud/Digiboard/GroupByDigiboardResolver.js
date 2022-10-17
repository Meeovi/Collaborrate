"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDigiboardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByDigiboardArgs_1 = require("./args/GroupByDigiboardArgs");
const Digiboard_1 = require("../../../models/Digiboard");
const DigiboardGroupBy_1 = require("../../outputs/DigiboardGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDigiboardResolver = class GroupByDigiboardResolver {
    async groupByDigiboard(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DigiboardGroupBy_1.DigiboardGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDigiboardArgs_1.GroupByDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByDigiboardResolver.prototype, "groupByDigiboard", null);
GroupByDigiboardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Digiboard_1.Digiboard)
], GroupByDigiboardResolver);
exports.GroupByDigiboardResolver = GroupByDigiboardResolver;
