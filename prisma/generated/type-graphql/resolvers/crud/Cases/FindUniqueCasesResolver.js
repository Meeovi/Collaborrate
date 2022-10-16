"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCasesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCasesArgs_1 = require("./args/FindUniqueCasesArgs");
const Cases_1 = require("../../../models/Cases");
const helpers_1 = require("../../../helpers");
let FindUniqueCasesResolver = class FindUniqueCasesResolver {
    async findUniqueCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCasesArgs_1.FindUniqueCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCasesResolver.prototype, "findUniqueCases", null);
FindUniqueCasesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cases_1.Cases)
], FindUniqueCasesResolver);
exports.FindUniqueCasesResolver = FindUniqueCasesResolver;
