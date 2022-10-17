"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVisitsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstVisitsArgs_1 = require("./args/FindFirstVisitsArgs");
const Visits_1 = require("../../../models/Visits");
const helpers_1 = require("../../../helpers");
let FindFirstVisitsResolver = class FindFirstVisitsResolver {
    async findFirstVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVisitsArgs_1.FindFirstVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstVisitsResolver.prototype, "findFirstVisits", null);
FindFirstVisitsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], FindFirstVisitsResolver);
exports.FindFirstVisitsResolver = FindFirstVisitsResolver;
