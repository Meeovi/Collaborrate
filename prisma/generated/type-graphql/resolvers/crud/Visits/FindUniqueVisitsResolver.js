"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVisitsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueVisitsArgs_1 = require("./args/FindUniqueVisitsArgs");
const Visits_1 = require("../../../models/Visits");
const helpers_1 = require("../../../helpers");
let FindUniqueVisitsResolver = class FindUniqueVisitsResolver {
    async findUniqueVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVisitsArgs_1.FindUniqueVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueVisitsResolver.prototype, "findUniqueVisits", null);
FindUniqueVisitsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], FindUniqueVisitsResolver);
exports.FindUniqueVisitsResolver = FindUniqueVisitsResolver;
