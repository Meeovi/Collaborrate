"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstNewslettersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstNewslettersArgs_1 = require("./args/FindFirstNewslettersArgs");
const Newsletters_1 = require("../../../models/Newsletters");
const helpers_1 = require("../../../helpers");
let FindFirstNewslettersResolver = class FindFirstNewslettersResolver {
    async findFirstNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Newsletters_1.Newsletters, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNewslettersArgs_1.FindFirstNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstNewslettersResolver.prototype, "findFirstNewsletters", null);
FindFirstNewslettersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletters_1.Newsletters)
], FindFirstNewslettersResolver);
exports.FindFirstNewslettersResolver = FindFirstNewslettersResolver;
