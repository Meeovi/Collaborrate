"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCasesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstCasesArgs_1 = require("./args/FindFirstCasesArgs");
const Cases_1 = require("../../../models/Cases");
const helpers_1 = require("../../../helpers");
let FindFirstCasesResolver = class FindFirstCasesResolver {
    async findFirstCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cases_1.Cases, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCasesArgs_1.FindFirstCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCasesResolver.prototype, "findFirstCases", null);
FindFirstCasesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cases_1.Cases)
], FindFirstCasesResolver);
exports.FindFirstCasesResolver = FindFirstCasesResolver;
